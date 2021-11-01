<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'description',
        'minimum',
        'purchase_value',
        'sale_value',
        'presentation',
        'total',
        'category_id',
        'user_id'
    ];
}
