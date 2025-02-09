<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Ramsey\Uuid\Guid\Guid;

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
        $allPortfolio = [
            [
                'id' => Guid::uuid4(),
                'title' => 'Giwu Bible Website',
                'summery' => 'An interactive web application that displays multiple versions of the Bible. Built using React.js for user interface and Laravel 11 for backend development, providing a responsive and accessible platform.',
                'description' => 'The application allows users to explore various Bible translations in one centralized location with intuitive navigation and search functionality.',
                'technologies' => ['React.js', 'Laravel 11'],
                'link' => 'https://github.com/yourusername/giwu-website',
                'imageUrl' => 'path/to/image.jpg',
                'is_deleted' => false
            ],
            [
                'id' => Guid::uuid4(),
                'title' => 'Giwu Bible Mobile App',
                'summery' => 'A mobile-friendly application that enables users to access the Bible on their smartphones. Built using Flutter, ensuring cross-platform compatibility and real-time updates.',
                'description' => 'The app provides offline capabilities and multi-language support for easy accessibility while reading the Bible.',
                'technologies' => ['Flutter'],
                'link' => 'https://github.com/yourusername/giwu-mobile',
                'imageUrl' => 'path/to/mobliee.jpg',
                'is_deleted' => false
            ],
            [
                'id' => Guid::uuid4(),
                'title' => 'Portfolio Website',
                'summery' => 'A professional portfolio website showcasing your work and personal projects. Built using React.js for the frontend and Laravel 11 for backend development to ensure a clean, user-friendly interface.',
                'description' => 'The website provides insights into my skills, projects, and experience with full-stack web development.',
                'technologies' => ['React.js', 'Laravel 11'],
                'link' => 'https://yourusername porfolio website',
                'imageUrl' => 'path/to/image.jpg',
                'is_deleted' => false
            ],
            [
                'id' => Guid::uuid4(),
                'title' => 'Portfolio App',
                'summery' => 'A backend service that provides notifications for contacts and updates to your portfolio. Built using Flutter to ensure cross-platform functionality.',
                'description' => 'The app integrates with the web interface, allowing real-time updates and notifications for contact management.',
                'technologies' => ['Flutter'],
                'link' => 'https://github.com/yourusername/portfolio-app',
                'imageUrl' => 'path/to/image.jpg',
                'is_deleted' => false
            ]
        ];

        return response()->json(['success' => true, 'portfolios' => $allPortfolio], 200);
    }
}
