<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardContactsController extends Controller
{
    /**
     * Display the Dashboard view.
     */
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return Inertia::render('Dashboard/Contacts/Index', [
            'contacts' => $contacts,
        ]);
    }

    public function view($id)
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
