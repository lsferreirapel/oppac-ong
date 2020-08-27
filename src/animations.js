export default {
    defaultSetup() {
        // Social Setup
        $(".facebook-link").hide();
        $(".twitter-link").hide();
        $(".insta-link").hide();
        
        // Contact Setup
        $(".phone-link").hide()
        $(".whats-link").hide()
        $(".email-link").hide()
    },
    socialAnimations() {
        $(".facebook-box").hover(() => {
            $(".twitter-box").hide();
            $(".insta-box").hide();
            $(".facebook-link").show();
        }, () => {
            $(".facebook-link").hide();
            $(".twitter-box").show();
            $(".insta-box").show();
        });
    
        $(".twitter-box").hover(() => {
            $(".facebook-box").hide();
            $(".insta-box").hide();
            $(".twitter-link").show();
        }, () => {
            $(".twitter-link").hide();
            $(".facebook-box").show();
            $(".insta-box").show();
        });
    
        $(".insta-box").hover(() => {
            $(".twitter-box").hide();
            $(".facebook-box").hide();
            $(".insta-link").show();
        }, () => {
            $(".insta-link").hide();
            $(".twitter-box").show();
            $(".facebook-box").show();
        });
    
    },
    contactAnimations() {
        $(".phone-box").hover(() => {
            $(".whats-box").hide();
            $(".email-box").hide();
            $(".phone-link").show();
        }, () => {
            $(".phone-link").hide();
            $(".whats-box").show();
            $(".email-box").show();
        });
    
        $(".whats-box").hover(() => {
            $(".phone-box").hide();
            $(".email-box").hide();
            $(".whats-link").show();
        }, () => {
            $(".whats-link").hide();
            $(".phone-box").show();
            $(".email-box").show();
        });
    
        $(".email-box").hover(() => {
            $(".whats-box").hide();
            $(".phone-box").hide();
            $(".email-link").show();
        }, () => {
            $(".email-link").hide();
            $(".whats-box").show();
            $(".phone-box").show();
        });
    }
}