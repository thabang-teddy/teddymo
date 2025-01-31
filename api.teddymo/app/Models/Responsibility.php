<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Responsibility extends Model
{
    use HasUuids;
    
    protected $fillable = [
        'id', 'experience_id', 'title', 'description', 'technologies'
    ];

    protected $casts = [
        'technologies' => 'array',
    ];

    public function experience()
    {
        return $this->belongsTo(Experience::class);
    }
}
