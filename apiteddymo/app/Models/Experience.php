<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasUuids;
    
    protected $fillable = [
        'id', 'title', 'jobtitle', 'company', 'duration', 'description', 'link','is_deleted'
    ];

    protected $casts = [
        'technologies' => 'array', // Cast to array for JSON field
    ];

    public function responsibilities()
    {
        return $this->hasMany(Responsibility::class);
    }
}