<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email',],
            'password' => ['required',]
        ]);

        if (! Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => "The credentials doesn't match our records",
            ]);
        }

        $request->session()->regenerate();

        return response()->json($request->session()->token());
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
