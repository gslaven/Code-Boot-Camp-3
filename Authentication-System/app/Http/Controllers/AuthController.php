<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use Purifier;
use Hash;
use Auth;
use JWTAuth;

use App\User;

class AuthController extends Controller
{
  public function signUp(Request $request)
  {
    $rules =
    [
      'email' => 'required',
      'name' => 'required',
      'password' => 'required'
    ];

    $validator = Validator::make(Purifier::clean($request->all()), $rules);

    if($validator->fails())
    {
      return Response::json(['error' => 'Please fill in all fields.']);
    }

    $email = $request->input('email');
    $name = $request->input('name');
    $password = $request->input('password');

    $password = Hash::make($password);

    $user = new User;
    $user->email = $email;
    $user->name = $name;
    $user->password = $password;
    $user->roleID = 2;
    $user->save();

    return Response::json(['success' => 'Thanks for signing up']);
  }
}
