<?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// // Example route to test API
// Route::get('/test', function () {
//     return response()->json(['message' => 'API working!']);
// });

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/records', function () {
    $data = DB::table('your_table_name')->limit(10)->get();
    return response()->json($data);
});


Route::post('/login', [AuthController::class, 'login']);

