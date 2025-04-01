<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(["prefix" => "/guest"], function(){
    Route::post("/register", [AuthController::class, "register"]);
});