<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PortfoliosController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Portfolio::all());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'summary' => 'required|string',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        $portfolio = Portfolio::create($validated);

        return response()->json($portfolio, 201);
    }

    public function show(Portfolio $portfolio): JsonResponse
    {
        return response()->json($portfolio);
    }

    public function update(Request $request, Portfolio $portfolio): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'summary' => 'string',
            'description' => 'string',
            'technologies' => 'array',
            'link' => 'url',
            'imageUrl' => 'string',
        ]);

        $portfolio->update($validated);

        return response()->json($portfolio);
    }

    public function destroy(Portfolio $portfolio): JsonResponse
    {
        $portfolio->delete();

        return response()->json(['message' => 'Portfolio deleted successfully.'], 200);
    }

    public function get(): JsonResponse
    {
        return response()->json(Portfolio::all());
    }

}
