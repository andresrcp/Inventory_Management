@extends('layouts.guest')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mx-4">
                <div class="card-body p-4">
                    <h1>Register</h1>
                    <p class="text-muted">Create your account</p>
                    <form action="{{route('register')}}" method="post">
                        @csrf
                    <div class="input-group mb-3">
                        <div class="input-group-prepend"><span class="input-group-text">
<svg class="c-icon">
<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
</svg></span></div>
                        <input class="form-control" type="text" placeholder="Username">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend"><span class="input-group-text">
<svg class="c-icon">
<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
</svg></span></div>
                        <input class="form-control" type="text" placeholder="Email">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend"><span class="input-group-text">
<svg class="c-icon">
<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
</svg></span></div>
                        <input class="form-control" type="password" placeholder="Password">
                    </div>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend"><span class="input-group-text">
<svg class="c-icon">
<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
</svg></span></div>
                        <input class="form-control" type="password" placeholder="Repeat password">
                    </div>
                    <button class="btn btn-block btn-success" type="button">Create Account</button>
                    </form>
                <div class="card-footer p-4">
                    <div class="row">
                        <div class="col-6">
                            <button class="btn btn-block btn-facebook" type="button"><span>Facebook</span></button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-block btn-twitter" type="button"><span>Twitter</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
