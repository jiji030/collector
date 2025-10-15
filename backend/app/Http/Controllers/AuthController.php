<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        //Fetch user from your charmafa.db table
        $user = DB::table('users')
            ->where('username', $username)
            ->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }

        //Check password (plain text for now)
        if ($user->password !== $password) {
            return response()->json([
                'success' => false,
                'message' => 'Incorrect password'
            ], 401);
        }

        //Successful login
        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'user' => [
                'admin_id' => $user->admin_id,
                'fname' => $user->fname,
                'lname' => $user->lname,
                'username' => $user->username,
                'role_id' => $user->role_id
            ]
        ]);
    }
}
