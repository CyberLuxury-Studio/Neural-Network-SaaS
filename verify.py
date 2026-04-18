from playwright.sync_api import sync_playwright

def run_cuj(page):
    print("Navigating to http://localhost:3000")
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # 1. Take a screenshot of the Hero Section
    print("Screenshot 1: Hero Section")
    page.screenshot(path="/tmp/verification_1_hero.png")
    page.wait_for_timeout(500)

    # 2. Scroll to Features Section
    print("Scrolling to Features")
    page.mouse.wheel(0, 800)
    page.wait_for_timeout(1000)
    print("Screenshot 2: Features Section")
    page.screenshot(path="/tmp/verification_2_features.png")
    page.wait_for_timeout(500)

    # 3. Scroll to Pricing Section
    print("Scrolling to Pricing")
    page.mouse.wheel(0, 1000)
    page.wait_for_timeout(1000)
    print("Screenshot 3: Pricing Section")
    page.screenshot(path="/tmp/verification_3_pricing.png")
    page.wait_for_timeout(500)

    # 4. Scroll to CTA Section and interact
    print("Scrolling to CTA")
    page.mouse.wheel(0, 1000)
    page.wait_for_timeout(1000)

    # Fill in the waitlist input in the CTA section
    print("Filling Waitlist")
    inputs = page.get_by_role("textbox")
    if inputs.count() > 1:
      inputs.nth(1).fill("test@neonaristocrat.com")
    else:
      inputs.first.fill("test@neonaristocrat.com")
    page.wait_for_timeout(500)

    print("Screenshot 4: CTA Section")
    page.screenshot(path="/tmp/verification_4_cta.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/tmp/videos",
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
            print("Verification complete.")
