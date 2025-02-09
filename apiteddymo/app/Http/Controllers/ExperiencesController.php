<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Ramsey\Uuid\Guid\Guid;

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
            'jobtitle' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'description' => 'required|string',
            'link' => 'required|string|max:255',
            'imageUrl' => 'string|max:255',
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
            'title' => 'required|string|max:255',
            'jobtitle' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'description' => 'required|string',
            'link' => 'required|string|max:255',
            'imageUrl' => 'string|max:255',
        ]);

        $experience->update($validated);

        return response()->json($experience);
    }

    public function destroy(Experience $experience): JsonResponse
    {
        $experience->delete();

        return response()->json(['message' => 'Experience deleted successfully.'], 200);
    }

    public function get(): JsonResponse
    {
        $allExperiences = [
            [
                'id' => Guid::uuid4(),
                'title' => 'ASP.NET Web Developer',
                'jobtitle' => 'ASP.NET Web Developer',
                'company' => 'JHnet',
                'duration' => 'March 2021 - Present (3 years , 11 months)',
                'description' => '<ul class="mt-3"><li>Developed and maintained web applications using C#, ASP.NET MVC, and related technologies. </li><li>Worked on admin and e-commerce websites for South Africa\'s leading distributor of branded promotional products.</li><li>Designed and implemented Product Information Management (PIM) admin systems to streamline data handling and improve operational efficiency.</li><li>Collaborated with cross-functional teams to gather requirements and deliver scalable software solutions.</li><li>Optimized application performance and resolved technical issues to ensure seamless functionality.</li><li>Contributed to the development of user-centric features and interfaces, enhancing overall user experience.</li></ul>',
                'link' => 'https://www.jhnet.co.za',
                'responsibilities' => [
                    [
                        'id' => Guid::uuid4(),
                        'title' =>  "E-commerce Website",
                        'description' => "Working on a team to develop a fully functional e-commerce platform for a leading distributor of branded promotional products.",
                        'technologies' =>  ["C#", "ASP.NET MVC", "SQL Server", "JavaScript"],
                    ],
                    [
                        'id' => Guid::uuid4(),
                        'title' =>  "Product Information Management (PIM) System",
                        'description' => "Implemented a PIM admin system to streamline data handling and improve operational efficiency.",
                        'technologies' =>  ["C#", "ASP.NET MVC", "SQL Server", "RESTful APIs"],
                    ],
                    [
                        'id' => Guid::uuid4(),
                        'title' =>  "Customer Portal",
                        'description' => "Built a user-friendly customer portal for managing orders, tracking shipments, and accessing support resources.",
                        'technologies' =>  ["C#", "ASP.NET Core", "React", "SQL Server"],
                    ],
                ],
                'is_deleted' => false
            ],
        ];

        return response()->json(['success' => true, 'experiences' => $allExperiences], 200);
    }
}
