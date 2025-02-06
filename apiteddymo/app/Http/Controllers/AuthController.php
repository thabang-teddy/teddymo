<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $user = User::where('email', $request->email)->first();
        
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'error' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => [
                "id" => $user->id,
                "username" => $user->name,
                "email" => $user->email,
            ],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    // public function register(Request $request)
    // {
    //     // Validate request data
    //     $validated = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:users,email',
    //         'password' => 'required|string|min:8|confirmed',
    //     ]);
    //     // return $request;

    //     // Create the user
    //     $user = User::create([
    //         'name' => $validated['name'],
    //         'email' => $validated['email'],
    //         'password' => Hash::make($validated['password']),
    //     ]);

    //     // Generate verification link
    //     $verificationUrl = URL::temporarySignedRoute(
    //         'verification.verify',
    //         now()->addMinutes(60),
    //         ['id' => $user->id, 'hash' => sha1($user->getEmailForVerification())]
    //     );

    //     // Send the email (e.g., using a notification or mail class)
    //     // $user->notify(new VerifyEmailNotification($verificationUrl));

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'User registered successfully. Please verify your email.',
    //         'verificationUrl' => $verificationUrl
    //     ], 201);

    //     // Return the token and user data
    //     // return response()->json([
    //     //     'token' => $token,
    //     //     'user' => $user,
    //     // ], 201);
    // }

    // public function verifyEmail(Request $request, $id, $hash)
    // {
    //     // Find the user by ID
    //     $user = User::findOrFail($id);
    
    //     // Check if the hash matches the user's email
    //     if (!hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
    //         return response()->json(['message' => 'Invalid verification link.'], 400);
    //     }
    
    //     // Check if the email is already verified
    //     if ($user->hasVerifiedEmail()) {
    //         return response()->json(['message' => 'Email is already verified.'], 200);
    //     }
    
    //     // Mark the user's email as verified
    //     $user->markEmailAsVerified();
    
    //     // Trigger the Verified event
    //     event(new Verified($user));
    
    //     return response()->json(['message' => 'Email verified successfully.'], 200);
    // }
}
