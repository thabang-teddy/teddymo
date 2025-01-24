<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ExperienceController extends Controller
{
    /**
     * Display the Experience view.
     */
    public function show(): Response
    {
        return Inertia::render('Experience');
    }
}
