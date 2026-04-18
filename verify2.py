from playwright.sync_api import sync_playwright

def run_cuj(page):
    print("Navigating to http://localhost:3000")
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # 1. Take a screenshot of the Hero Section (to verify Spline and Glitch Text)
    print("Screenshot 1: Hero Section")
    page.screenshot(path="/tmp/verification_1_hero_fixed.png")
    page.wait_for_timeout(500)

    # 2. Scroll to Features Section (to verify Hydration fix on NeonCard)
    print("Scrolling to Features")
    page.mouse.wheel(0, 800)
    page.wait_for_timeout(1000)
    print("Screenshot 2: Features Section")
    page.screenshot(path="/tmp/verification_2_features_fixed.png")
    page.wait_for_timeout(500)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/tmp/videos2",
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
            print("Verification complete.")
