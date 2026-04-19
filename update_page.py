import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = 'import { ModelArchitectureSection } from "@/components/sections/ModelArchitectureSection";'
content = content.replace('import { FAQSection } from "@/components/sections/FAQSection";', 
                         import_stmt + '\nimport { FAQSection } from "@/components/sections/FAQSection";')

content = content.replace('<FeaturesSection />',
                         '<FeaturesSection />\n      <ModelArchitectureSection />')

content = content.replace('import { CtaSection } from "@/components/sections/CtaSection";\n', '')
content = content.replace('<CtaSection />\n      ', '')

content = content.replace('import { CTASection } from "@/components/sections/CTASection";', 
                         'import { CTASection } from "@/components/sections/CTASection";')

with open(page_path, "w") as f:
    f.write(content)

cta_path = "src/components/sections/CTASection.tsx"
with open(cta_path, "r") as f:
    content = f.read()

content = content.replace('export function CtaSection()', 'export function CTASection()')

with open(cta_path, "w") as f:
    f.write(content)
