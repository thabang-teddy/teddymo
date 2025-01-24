<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the About view.
     */
    public function show(): Response
    {
        return Inertia::render('About');
    }
}
