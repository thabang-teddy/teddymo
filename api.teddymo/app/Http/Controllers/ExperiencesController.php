<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExperiencesController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Experience::all());
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

        $experience = Experience::create($validated);

        return response()->json($experience, 201);
    }

    public function show(Experience $experience): JsonResponse
    {
        return response()->json($experience);
    }

    public function update(Request $request, Experience $experience): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'technologies' => 'array',
            'link' => 'url',
            'imageUrl' => 'string',
        ]);

        $experience->update($validated);

        return response()->json($experience);
    }

    public function destroy(Experience $experience): JsonResponse
    {
        $experience->delete();

        return response()->json(['message' => 'Experience deleted successfully.'], 200);
    }
}
