<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller{
    
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            "fullname" => "required",
            "email" => "required|email",
            "password" => "required",
            "confirmed_password" => "required|same:password", 
        ]);

        if($validator->fails()){
            return response()->json([
                "status" => false,
                "message" => "validation error",
                "data" => $validator->errors()->all(),
            ]);
        };

        return response()->json([
            "status" => true,
            "message" => "registration complete",
        ]);

    }
}
