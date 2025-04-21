<?php

namespace Database\Seeders;

use App\Models\Portfolio;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Teddy',
            'email' => 'admin@teddymo.co.za',
            'password' => bcrypt('jIO8fcGPukyukB'),
            'email_verified_at' => time()
        ]);

        // Portfolio::create([
        //     'title' => 'My Portfolio Website',
        //     'summary' => 'A modern web application built with Laravel and React.',
        //     'description' => '<p>A full-featured portfolio website.</p>',
        //     'technologies' => ['Laravel', 'React', 'SQLite'],
        //     'link' => 'https://example.com',
        //     'imageUrl' => '/images/portfolio.png',
        // ]);

        Portfolio::create([
            'title' => 'Giwu Bible Website',
            'summary' => 'An interactive web application that displays multiple versions of the Bible. Built using React.js for user interface and Laravel 11 for backend development, providing a responsive and accessible platform.',
            'description' => 'The application allows users to explore various Bible translations in one centralized location with intuitive navigation and search functionality.',
            'technologies' => ["React.js", "Laravel 11"],
            'link' => 'https://github.com/yourusername/giwu-website',
            'imageUrl' => 'path/to/image.jpg',
            'is_active' => true
        ]);

        Portfolio::create([
            'title' => 'Giwu Bible Mobile App',
            'summary' => 'A mobile-friendly application that enables users to access the Bible on their smartphones. Built using Flutter, ensuring cross-platform compatibility and real-time updates.',
            'description' => 'The app provides offline capabilities and multi-language support for easy accessibility while reading the Bible.',
            'technologies' => ["Flutter"],
            'link' => 'https://github.com/yourusername/giwu-mobile',
            'imageUrl' => 'path/to/mobliee.jpg',
            'is_active' => true
        ]);

        Portfolio::create([
            'title' => 'Portfolio Website',
            'summary' => 'A professional portfolio website showcasing your work and personal projects. Built using React.js for the frontend and Laravel 11 for backend development to ensure a clean, user-friendly interface.',
            'description' => 'The website provides insights into my skills, projects, and experience with full-stack web development.',
            'technologies' => ["React.js", "Laravel 11"],
            'link' => 'https://yourusername porfolio website',
            'imageUrl' => 'path/to/image.jpg',
            'is_active' => true
        ]);

        Portfolio::create([
            'title' => 'Portfolio App',
            'summary' => 'A backend service that provides notifications for contacts and updates to your portfolio. Built using Flutter to ensure cross-platform functionality.',
            'description' => 'The app integrates with the web interface, allowing real-time updates and notifications for contact management.',
            'technologies' => ["Flutter"],
            'link' => 'https://github.com/yourusername/portfolio-app',
            'imageUrl' => 'path/to/image.jpg',
            'is_active' => true
        ]);
    }
}
