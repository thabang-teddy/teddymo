<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasUuids;
    
    protected $fillable = [
        'id', 'title', 'summary', 'description', 'technologies', 'link', 'imageUrl','is_deleted'
    ];

    protected $casts = [
        'technologies' => 'array', // Cast to array for JSON field
    ];
}
