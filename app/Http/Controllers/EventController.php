<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function getEvent()
    {
        $data = Event::all();

        return response()->json($data);
    }
}
