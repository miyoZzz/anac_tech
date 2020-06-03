<?php

use Hyperf\Database\Schema\Schema;
use Hyperf\Database\Schema\Blueprint;
use Hyperf\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('user', function (Blueprint $table) {
            //
            $table->increments('id')->unsigned()->change();
            $table->tinyInteger('gender');
            $table->string('nickname',20);
            $table->integer('mobile')->unsigned();
            $table->string('password',32);
            $table->string('avatar',32);
            $table->integer('created_at')->unsigned();
            $table->integer('updated_at')->unsigned();
            $table->engine = 'InnoDB';
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user', function (Blueprint $table) {
            //
        });
    }
}
