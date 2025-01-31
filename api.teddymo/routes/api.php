<?php

use App\Http\Controllers\ContactsController;
use App\Http\Controllers\PortfoliosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

Route::get('/', function (Request $request) {
    return "API";
});

Route::get('/portfolios/get', [PortfoliosController::class, 'get']);

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('portfolios')->group(function () {
        Route::get('/', [PortfoliosController::class, 'index']);
        Route::post('/', [PortfoliosController::class, 'store']);
        Route::get('/{portfolio}', [PortfoliosController::class, 'show']);
        Route::put('/{portfolio}', [PortfoliosController::class, 'update']);
        Route::delete('/{portfolio}', [PortfoliosController::class, 'destroy']);
    });

    // Contact API Routes
    Route::prefix('contacts')->group(function () {
        Route::get('/', [ContactsController::class, 'index']);
        Route::post('/', [ContactsController::class, 'store']);
        Route::get('/{contact}', [ContactsController::class, 'show']);
        Route::delete('/{contact}', [ContactsController::class, 'destroy']);
    });
});

require __DIR__.'/auth.php';
