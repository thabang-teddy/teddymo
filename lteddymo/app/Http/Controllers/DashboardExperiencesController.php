<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardExperiencesController extends Controller
{
    public function index()
    {
        $experiences = Experience::with('responsibilities')->get();
        return Inertia::render('Dashboard/Experience/Index', ['experiences' => $experiences]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Experience/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        $experience = Experience::create($validated);

        return redirect()->route('experiences.index')->with('success', 'Experience created successfully.');
    }

    public function edit($id)
    {
        $experience = Experience::with('responsibilities')->findOrFail($id);
        return Inertia::render('Dashboard/Experience/Edit', ['experience' => $experience]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        $experience = Experience::findOrFail($id);
        $experience->update($validated);

        return redirect()->route('experiences.index')->with('success', 'Experience updated successfully.');
    }

    public function destroy($id)
    {
        $experience = Experience::findOrFail($id);
        $experience->delete();

        return redirect()->route('experiences.index')->with('success', 'Experience deleted successfully.');
    }
}
