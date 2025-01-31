<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use function Pest\Laravel\json;

class ContactsController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Contact::all());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json($contact, 201);
    }

    public function show(Contact $contact): JsonResponse
    {
        return response()->json($contact);
    }

    public function update(Request $request, Contact $contact): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'technologies' => 'array',
            'link' => 'url',
            'imageUrl' => 'string',
        ]);

        $contact->update($validated);

        return response()->json($contact);
    }

    public function destroy(Contact $contact): JsonResponse
    {
        $contact->delete();

        return response()->json(['message' => 'Contact deleted successfully.'], 200);
    }
}
