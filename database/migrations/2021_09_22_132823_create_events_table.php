<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->longText('shortlink')->nullable();
            $table->longText('judul');
            $table->longText('gambar');
            $table->longText('deskripsi');
            $table->timestamp('tgl_mulai');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });

        \Illuminate\Support\Facades\DB::table('events')->insert([
           'judul' => 'ASIG 14 Webinar Series: Pentingnya Privasi Pada Internet',
           'gambar' => 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/blog/1541654611_s58pGW.jpg',
            'deskripsi' => 'webinar',
            'tgl_mulai' => \Carbon\Carbon::now('Asia/Jakarta'),
            'user_id' => 1
        ]);

        \Illuminate\Support\Facades\DB::table('events')->insert([
            'judul' => 'BLABLAblablablabla',
            'gambar' => 'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/blog/1541654611_s58pGW.jpg',
            'deskripsi' => 'webinar',
            'tgl_mulai' => \Carbon\Carbon::now('Asia/Jakarta'),
            'user_id' => 1
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
