<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::latest()->get();
        return response()->json([
            "status" => true,
            "message" => "Liste des contacts récupérée avec succès",
            "data" => ContactResource::collection($contacts)
        ]);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Contact créé avec succès',
            'data' => new ContactResource($contact)
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return response()->json([
            'status' => true,
            'message' => 'Contact récupéré avec succès',
            'data' => new ContactResource($contact)
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());
        return response()->json([
            'status' => true,
            'message' => 'Contact modifié avec succès',
            'data' => new ContactResource($contact)
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json([
            'status' => true,
            'message' => 'Contact supprimé avec succès',
            'data' => null
        ], 200);
    }
}
