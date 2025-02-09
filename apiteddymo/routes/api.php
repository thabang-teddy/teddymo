<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\ExperiencesController;
use App\Http\Controllers\PortfoliosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {
    return "API";
});

Route::get('/portfolios/get', [PortfoliosController::class, 'get']);
Route::get('/experiences/get', [ExperiencesController::class, 'get']);
Route::post('/contacts/send', [ContactsController::class, 'websiteContact']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('portfolios')->group(function () {
        Route::get('/', [PortfoliosController::class, 'index']);
        Route::post('/', [PortfoliosController::class, 'store']);
        Route::get('/{portfolio}', [PortfoliosController::class, 'show']);
        Route::put('/{portfolio}', [PortfoliosController::class, 'update']);
        Route::delete('/{portfolio}', [PortfoliosController::class, 'destroy']);
    });

    Route::prefix('experiences')->group(function () {
        Route::get('/', [ExperiencesController::class, 'index']);
        Route::post('/', [ExperiencesController::class, 'store']);
        Route::get('/{experience}', [ExperiencesController::class, 'show']);
        Route::put('/{experience}', [ExperiencesController::class, 'update']);
        Route::delete('/{experience}', [ExperiencesController::class, 'destroy']);
    });

    // Contact API Routes
    Route::prefix('contacts')->group(function () {
        Route::get('/', [ContactsController::class, 'index']);
        Route::post('/contacts/send', [ContactsController::class, 'store']);
        Route::get('/{contact}', [ContactsController::class, 'show']);
        Route::delete('/{contact}', [ContactsController::class, 'destroy']);
    });
});
