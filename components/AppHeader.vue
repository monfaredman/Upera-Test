<template>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="px-3">
      <b-navbar-brand href="/">
        <img src="/logo.png" alt="Logo" height="40">
      </b-navbar-brand>
  
      <b-form-input
        class="mx-3 rounded"
        placeholder="جستجو..."
      ></b-form-input>
  
      <b-navbar-nav class="ml-auto">
        <b-nav-item>منوی کودک</b-nav-item>
        <b-button variant="success" class="mx-2">اعتبار آنلاین</b-button>
        <b-dropdown text="پروفایل" right>
          <b-dropdown-item>حساب من</b-dropdown-item>
          <b-dropdown-item>خروج</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </template>
  