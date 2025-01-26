<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the Dashboard view.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Index', [
            'routes' => [
                'contacts' => url('/dashboard/contacts'),
                'contactDetails' => url('/dashboard/contacts'), // Add `/{id}` in React
            ],
        ]);
    }
}
