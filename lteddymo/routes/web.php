<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ElitoController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/portfolio', [PortfolioController::class, 'show'])->name('portfolio.show');
// Route::get('/', [HomeController::class, 'show'])->name('home.show');
Route::get('/experience', [ExperienceController::class, 'show'])->name('experience.show');
Route::get('/about', [AboutController::class, 'show'])->name('about.show');
Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/contact/success', [ContactController::class, 'success'])->name('contact.success');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
//     Route::get('/dashboard/contact', [DashboardController::class, 'contact'])->name('dashboard.contact');
//     Route::get('/dashboard/contact/{id}', [DashboardController::class, 'contactDetails'])->name('dashboard.contactDetails');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('/dashboard/contacts', [DashboardController::class, 'contacts'])->name('dashboard.contacts');
    Route::get('/dashboard/contacts/{id}', [DashboardController::class, 'contactsDetails'])->name('dashboard.contactsDetails');
});

require __DIR__.'/auth.php';
