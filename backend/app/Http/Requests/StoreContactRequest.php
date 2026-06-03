<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50',
            'phone' => 'required|string|unique:contacts,phone',
            'address' => 'nullable|string'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire',
            'name.string' => 'Le nom n\'est pas valide',
            'name.max' => 'Le nom est trop long',

            'phone.required'  => 'Le numéro est obligatoire',
            'phone.string'  => 'Le numéro est invalide',
            'phone.unique'  => 'Le numéro est déja uitilé',

            'address.string'  => 'Addresse invalide',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'status' => false,
                'message' => "Erreur de validation",
                'errors' => $validator->errors(),
            ])
        );
    }
}
