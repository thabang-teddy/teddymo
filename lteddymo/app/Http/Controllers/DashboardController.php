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

    public function contacts()
    {
        // $contacts = Contact::where('is_deleted', false)->get();

        // return Inertia::render('Dashboard/Contacts/Index', [
        //     'contacts' => $contacts,
        // ]);

        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return Inertia::render('Dashboard/Contacts/Index', [
            'contacts' => $contacts,
        ]);
    }

    public function contactsDetails($id)
    {
        // $contact = Contact::findOrFail($id);

        // return Inertia::render('Dashboard/Contacts/Show', [
        //     'contact' => $contact,
        // ]);

        $contact = Contact::findOrFail($id);
        return Inertia::render('Dashboard/Contacts/View', [
            'contact' => $contact,
        ]);
    }
}
