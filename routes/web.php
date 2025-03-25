<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/terms-of-use', function () {
    return Inertia::render('TermsOfUse');
})->name('terms-of-use');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/accessibility', function () {
    return Inertia::render('Accessibility');
})->name('accessibility');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';