<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the Home view.
     */
    public function show(): Response
    {
        return Inertia::render('Home');
    }
}
