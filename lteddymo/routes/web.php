<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardContactsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardExperiencesController;
use App\Http\Controllers\DashboardPortfoliosController;
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

Route::get('/', [HomeController::class, 'show'])->name('home.show');
Route::get('/portfolio', [PortfolioController::class, 'show'])->name('portfolio.show');
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
    // Dashboard Routes
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('/dashboard/contacts', [DashboardContactsController::class, 'index'])->name('dashboard.contacts.index');
    Route::get('/dashboard/contacts/{id}', [DashboardContactsController::class, 'view'])->name('dashboard.contacts.view');

    // // Portfolio Routes
    // Route::get('/dashboard/portfolios', [PortfolioController::class, 'index'])->name('dashboard.portfolios.index');
    // Route::get('/dashboard/portfolios/create', [PortfolioController::class, 'create'])->name('dashboard.portfolios.create');
    // Route::post('/dashboard/portfolios', [PortfolioController::class, 'store'])->name('dashboard.portfolios.store');
    // Route::get('/dashboard/portfolios/{portfolio}/edit', [PortfolioController::class, 'edit'])->name('dashboard.portfolios.edit');
    // Route::put('/dashboard/portfolios/{portfolio}', [PortfolioController::class, 'update'])->name('dashboard.portfolios.update');
    // Route::delete('/dashboard/portfolios/{portfolio}', [PortfolioController::class, 'destroy'])->name('dashboard.portfolios.destroy');

    // // Experience Routes
    // Route::get('/dashboard/experiences', [ExperienceController::class, 'index'])->name('dashboard.experiences.index');
    // Route::get('/dashboard/experiences/create', [ExperienceController::class, 'create'])->name('dashboard.experiences.create');
    // Route::post('/dashboard/experiences', [ExperienceController::class, 'store'])->name('dashboard.experiences.store');
    // Route::get('/dashboard/experiences/{experience}/edit', [ExperienceController::class, 'edit'])->name('dashboard.experiences.edit');
    // Route::put('/dashboard/experiences/{experience}', [ExperienceController::class, 'update'])->name('dashboard.experiences.update');
    // Route::delete('/dashboard/experiences/{experience}', [ExperienceController::class, 'destroy'])->name('dashboard.experiences.destroy');

    // Portfolio & Experience Resource Routes
    Route::resource('/dashboard/portfolios', DashboardPortfoliosController::class)->except(['show']);
    Route::resource('/dashboard/experiences', DashboardExperiencesController::class)->except(['show']);

});

require __DIR__.'/auth.php';
