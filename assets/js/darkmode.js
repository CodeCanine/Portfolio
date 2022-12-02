// JavaScript Document
$(document).ready(function () {


  $('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('body').toggleClass('night');
    $('footer').toggleClass('night');
    $('.bi-linkedin,.bi-facebook,.bi-github,.fa-artstation').toggleClass('socialnight');
    $('.footersocial').toggleClass('footersocialnight');
    $('.bx.bxl-microsoft-teams,.bx.bxl-skype,.bx.bxl-facebook,.bx.bxl-linkedin').toggleClass('footeri');
//    $('.portfolio .portfolio-wrap .portfolio-info').toggleClass('portfolionight');
    $('#hero').toggleClass('.herobgnight');
    $('.btn').toggleClass('btnnight');
    $('.buttonday').toggleClass('submitnight');
    $('.nav-link.scrollto.active').toggleClass('nav-barnight');
    $('.val,.skill').toggleClass('light');
    $('.c').toggleClass('cnight');
    $('.resume-title').toggleClass('light');
    $('.pybot').toggleClass('cnight');
    $('.st3').toggleClass('st3night');
    $('.st0').toggleClass('st3night');
    $('.typed-cursor').toggleClass('resumenight');

    $("#hero").toggleClass('heronight');

  });
});
