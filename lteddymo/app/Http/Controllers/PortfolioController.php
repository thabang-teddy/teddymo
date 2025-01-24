<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /**
     * Display the Portfolio view.
     */
    public function show(): Response
    {
        return Inertia::render('Portfolio');
    }
}
