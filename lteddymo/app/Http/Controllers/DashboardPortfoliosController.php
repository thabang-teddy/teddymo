<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardPortfoliosController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::all();
        return Inertia::render('Dashboard/Portfolio/Index', ['portfolios' => $portfolios]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Portfolio/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'summary' => 'required|string|max:500',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        Portfolio::create($validated);

        return redirect()->route('portfolios.index')->with('success', 'Portfolio created successfully.');
    }

    public function edit($id)
    {
        
        if (is_null($id) || $id === "") {
            return redirect()->route('portfolios.index')->with('error', 'Portfolio Not Found');
        }

        $portfolio = Portfolio::findOrFail($id);
        
        if ($portfolio == null) {
            return redirect()->route('portfolios.index')->with('error', 'Portfolio Not Found');
        }

        return Inertia::render('Dashboard/Portfolio/Edit', ['portfolio' => $portfolio]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'summary' => 'required|string|max:500',
            'description' => 'required|string',
            'technologies' => 'required|array',
            'link' => 'required|url',
            'imageUrl' => 'required|string',
        ]);

        $portfolio = Portfolio::findOrFail($id);
        $portfolio->update($validated);

        return redirect()->route('portfolios.index')->with('success', 'Portfolio updated successfully.');
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        $portfolio->delete();

        return redirect()->route('portfolios.index')->with('success', 'Portfolio deleted successfully.');
    }
}
