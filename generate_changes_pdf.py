from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
    KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

OUTPUT = r"c:\Users\tkuri\Documents\PKF_C\PKF_Website_Changes_Report.pdf"

# ── Colour palette (from variables.css) ──────────────────────────────────────
FOREST  = colors.HexColor("#1C3A2A")
IVORY   = colors.HexColor("#F5F0E8")
GOLD    = colors.HexColor("#B8975A")
WATER   = colors.HexColor("#A8C5C0")
DARK    = colors.HexColor("#111810")
TEXT    = colors.HexColor("#2C2C2C")
MUTED   = colors.HexColor("#7A7A6E")

# Derived tones
IVORY_DARK   = colors.HexColor("#EDE5D4")   # slightly deeper ivory for alt rows
GOLD_LIGHT   = colors.HexColor("#F7EDD8")   # very pale gold for flag bg
OLD_RED      = colors.HexColor("#7A3B1E")   # warm dark rust — "old text"
NEW_GREEN    = colors.HexColor("#1C3A2A")   # forest — "new text"

# ── Document setup ────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=2*cm, rightMargin=2*cm,
    topMargin=2*cm, bottomMargin=2*cm,
    title="Philipkutty's Farm — Website Content Changes",
    author="Thomas"
)

# ── Styles ────────────────────────────────────────────────────────────────────
def S(name, **kw):
    base = kw.pop("parent", None)
    if base:
        p = ParagraphStyle(name, parent=base, **kw)
    else:
        p = ParagraphStyle(name, **kw)
    return p

title_style = S("PKFTitle",
    fontName="Times-Roman", fontSize=22, leading=26,
    textColor=FOREST, alignment=TA_CENTER, spaceAfter=2
)
subtitle_style = S("PKFSubtitle",
    fontName="Times-Italic", fontSize=10, leading=13,
    textColor=MUTED, alignment=TA_CENTER, spaceAfter=4
)
section_style = S("PKFSection",
    fontName="Times-Bold", fontSize=11, leading=14,
    textColor=FOREST, spaceBefore=12, spaceAfter=4
)
body_style = S("PKFBody",
    fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=TEXT, spaceAfter=6
)
flag_style = S("PKFFlag",
    fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=TEXT, spaceAfter=4, leftIndent=6
)
cell_style = S("PKFCell",
    fontName="Helvetica", fontSize=7.5, leading=10,
    textColor=TEXT
)
th_style = S("PKFTh",
    fontName="Helvetica-Bold", fontSize=8, leading=10,
    textColor=IVORY, alignment=TA_LEFT
)
num_style = S("PKFNum",
    fontName="Helvetica-Bold", fontSize=8, leading=10,
    textColor=IVORY, alignment=TA_CENTER
)
footer_style = S("PKFFooter",
    fontName="Helvetica-Oblique", fontSize=7.5,
    textColor=MUTED, alignment=TA_CENTER, spaceBefore=8
)

# ── Table helpers ─────────────────────────────────────────────────────────────
COL_WIDTHS = [0.9*cm, 4.8*cm, 4.8*cm, 5.7*cm]

def make_header():
    return [
        Paragraph("#", num_style),
        Paragraph("Original", th_style),
        Paragraph("Corrected", th_style),
        Paragraph("Reason", th_style),
    ]

def R(num, old, new, reason):
    return [
        Paragraph(str(num), S("n", fontName="Helvetica-Bold", fontSize=8,
                               leading=10, textColor=MUTED, alignment=TA_CENTER)),
        Paragraph(f'<font color="#7A3B1E">{old}</font>', cell_style),
        Paragraph(f'<font color="#1C3A2A"><b>{new}</b></font>', cell_style),
        Paragraph(reason, cell_style),
    ]

def make_table(rows_data):
    data = [make_header()] + rows_data
    t = Table(data, colWidths=COL_WIDTHS, repeatRows=1)
    t.setStyle(TableStyle([
        # Header row
        ("BACKGROUND",   (0,0), (-1,0), FOREST),
        ("LINEBELOW",    (0,0), (-1,0), 1.5, GOLD),
        # Alternating rows
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [IVORY, IVORY_DARK]),
        # Grid
        ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#D4C9B0")),
        ("LINEBELOW",    (0,-1), (-1,-1), 0.8, colors.HexColor("#C4B89A")),
        # Padding & alignment
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",   (0,0), (-1,-1), 5),
        ("BOTTOMPADDING",(0,0), (-1,-1), 5),
        ("LEFTPADDING",  (0,0), (-1,-1), 5),
        ("RIGHTPADDING", (0,0), (-1,-1), 5),
    ]))
    return t

def gold_rule():
    return HRFlowable(width="100%", thickness=1.2, color=GOLD, spaceAfter=6, spaceBefore=2)

def forest_rule():
    return HRFlowable(width="100%", thickness=0.4, color=FOREST, spaceAfter=8, spaceBefore=2)

# ── Build story ───────────────────────────────────────────────────────────────
story = []

# Title block
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph("Philipkutty's Farm", title_style))
story.append(Paragraph("Website Content Changes Report", S("PKFTitle2",
    fontName="Times-Italic", fontSize=14, leading=17,
    textColor=GOLD, alignment=TA_CENTER, spaceAfter=6
)))
story.append(gold_rule())
story.append(Paragraph(
    "Based on <i>PKF WEBSITE PROOFREAD.docx</i>  ·  Applied June 2026",
    subtitle_style
))
story.append(Spacer(1, 0.4*cm))

# Legend
legend_data = [
    [
        Paragraph("<b>Colour key</b>", S("lh", fontName="Helvetica-Bold", fontSize=8,
                                          textColor=FOREST)),
        Paragraph(f'<font color="#7A3B1E"><b>Original text</b></font> — what was on the site',
                  S("lc", fontName="Helvetica", fontSize=8, textColor=TEXT)),
        Paragraph(f'<font color="#1C3A2A"><b>Corrected text</b></font> — what it now says',
                  S("lc", fontName="Helvetica", fontSize=8, textColor=TEXT)),
    ]
]
legend_t = Table(legend_data, colWidths=[2.5*cm, 7.5*cm, 6.2*cm])
legend_t.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), GOLD_LIGHT),
    ("BOX",        (0,0), (-1,-1), 0.8, GOLD),
    ("LINEAFTER",  (0,0), (0,-1),  0.4, colors.HexColor("#D4C9B0")),
    ("LINEAFTER",  (1,0), (1,-1),  0.4, colors.HexColor("#D4C9B0")),
    ("VALIGN",     (0,0), (-1,-1), "MIDDLE"),
    ("TOPPADDING", (0,0), (-1,-1), 6),
    ("BOTTOMPADDING",(0,0), (-1,-1), 6),
    ("LEFTPADDING",(0,0), (-1,-1), 8),
]))
story.append(legend_t)
story.append(Spacer(1, 0.5*cm))

# ── Name correction ───────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Name Correction  (confirmed by family)", section_style),
    Paragraph(
        "The late husband's name is <b>Vinod Mathew</b>, not Vinod Philip. "
        "Corrected in two places: Host &amp; Family page and The Farm page.",
        body_style
    ),
    make_table([
        R("A", "Vinod Philip (Host &amp; Family page)", "Vinod Mathew", "Confirmed by family"),
        R("B", "the grandfather of Vinod Philip (Farm page)", "the grandfather of Vinod Mathew", "Confirmed by family"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Home ──────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Home Page", section_style),
    make_table([
        R(1, "as it provides something different", "offering something different", "Yellow correction"),
        R(2, "independent from each other", "independent of one another", "Yellow correction"),
        R(3, "open plan bungalow", "open-plan bungalow", "Yellow correction — hyphen added"),
        R(4, "a separate bedroom, living room and sit-out",
              "separate bedrooms, living rooms and a sit-out", "Yellow correction — plural"),
        R(5, "farm island, which was reclaimed from", "farm island reclaimed from",
              "Yellow correction — cleaner construction"),
        R(6, "sustainable/organic methods of farming", "sustainable organic farming",
              "Yellow correction"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Kerala ────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Kerala &amp; The Backwaters", section_style),
    make_table([
        R(7, "…Onam festival, and for the sheer abundance of its birdlife — kingfishers… to the waterfront.",
              "…Onam festival. The birdlife is abundant — kingfishers… to the waterfront.",
              "Red comment: sentence too long — split into two"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Farm ──────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("The Farm", section_style),
    make_table([
        R(8,  "by Philipkutty, the grandfather", "by Mathew, the grandfather",
               "Red comment: 'Mathew not Philipkutty'"),
        R(9,  "Today the farm", "Today, the farm", "Yellow correction — comma added"),
        R(10, "below the level of the lake", "below the lake's level", "Yellow correction"),
        R(11, "that requires constant attention", "that require constant attention",
               "Yellow correction — plural verb (subject: dykes and pumps)"),
        R(12, "paddy fields", "fruit trees",
               "Red comment: 'we don't have paddy fields on the island'"),
        R(13, "the sound of weaver birds building their hanging nests", "birdsong",
               "Red comment: 'We don't have them in pkf for sure'"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Food ──────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Food", section_style),
    make_table([
        R(14, "or on the jetty if the evening is fine", "or on the jetty, weather permitting",
               "Red comment: rephrase 'if the evening is fine'"),
        R(15, "pressed fresh each morning", "freshly pressed each morning", "Yellow correction"),
        R(16, "The fish is whatever was caught that day…", "The fish is the catch of the day…",
               "Yellow correction"),
        R(17, "with hands-on sessions in the kitchen", "with guided sessions in the kitchen",
               "Red comment: it's a demo — avoid over-promising"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Activities ────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Activities", section_style),
    make_table([
        R(18, "A longer excursion by houseboat", "A longer houseboat excursion",
               "Yellow correction"),
        R(19, "visits to nearby Kottayam, Alleppey…",
               "visits to nearby towns like Kottayam, Alleppey…", "Yellow correction"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Tips ──────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Tips &amp; Suggestions", section_style),
    make_table([
        R(20, "if arranged in advance — please ask when making your reservation",
               "in advance — kindly request for the pickup when making your reservation",
               "Yellow correction"),
        R(21, "at the airport", "at airports", "Yellow correction — plural"),
        R(22, "first aid kit", "first-aid kit", "Yellow correction — hyphen"),
        R(23, "assist in any medical emergency", "assist with any medical emergency",
               "Yellow correction"),
        R(24, "Credit cards are accepted for the room tariff. [sentence removed]",
               "(line removed)",
               "Red comment: card machine discontinued since COVID"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Cookery ───────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Cookery Holiday", section_style),
    make_table([
        R(25, "is the result of decades", "stems from decades", "Yellow correction"),
        R(26, "for a hands-on session preparing a full Kerala meal",
               "for a cooking demonstration, preparing a full Kerala meal",
               "Red comment: it's a demo, not hands-on"),
        R(27, "A typical cookery day begins with a visit to the local market…",
               "A typical cookery day may begin with an optional visit… — "
               "this is a complementary experience, separate from the cooking session itself.",
               "Red comment: clarify that the market visit is not part of the cookery demo"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Retreat ───────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Retreat", section_style),
    make_table([
        R(28, "the thatched pavilion overlooking the water",
               "the jetty overlooking the water",
               "Red comment: 'isn't it the jetty we are talking about, pavilion we never do yoga'"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Villas ────────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("The Villas", section_style),
    make_table([
        R(29, "named after popular local flowering plants",
               "named after popular local flowers", "Yellow correction"),
        R(30, "is open plan", "is an open plan", "Yellow correction — article added"),
        R(31, "a separate living room, bedroom and sit-out",
               "separate living rooms, bedrooms and sit-outs",
               "Yellow correction — plural"),
        R(32, "…whilst ceiling fans assure a cooling circulation of air at all times. [in TV/telephone sentence]",
               "We have installed air-conditioners and ceiling fans within the cottages… [merged with AC sentence]",
               "Red comment: ceiling fans out of context beside TV/telephone"),
        R(33, "An Internet facility through Wi-Fi is available free of cost to the guests",
               "Wi-Fi is available free of charge to all guests",
               "Red comment: needs rephrasing"),
        R(34, "tea and coffee making provisions", "tea and coffee-making provisions",
               "Hyphen correction"),
        R(35, "with two large single beds, wardrobe, cupboard…",
               "with two large single beds, a wardrobe, a cupboard…",
               "Yellow correction — articles added"),
        R(36, "There is a clean, dry and spacious bathroom in each villa.",
               "Each villa has a clean, dry, and spacious bathroom.",
               "Yellow correction"),
        R(37, "netted to check the entry of insects",
               "netted to prevent insect entry", "Yellow correction"),
        R(38, "open on to the farm", "open onto the farm",
               "Yellow correction — one word"),
    ]),
]))
story.append(Spacer(1, 0.3*cm))

# ── Reviews ───────────────────────────────────────────────────────────────────
story.append(KeepTogether([
    Paragraph("Reviews", section_style),
    make_table([
        R(39, "welcoming guests from around the world for many years",
               "welcoming guests from around the world for over 25 years",
               "Red comment: 'Should we quantify it? Since the 2000's or for the last 25 years?'"),
    ]),
]))
story.append(Spacer(1, 0.5*cm))

# ── Flagged items ─────────────────────────────────────────────────────────────
story.append(gold_rule())
story.append(Paragraph("Items Flagged for Further Review — not yet changed", section_style))

flags = [
    ("Kuttanad geographic claim",
     "The proofreader asked whether the farm is technically in Kuttanad or only in a broader geographical sense. Left unchanged — please confirm."),
    ("WhatsApp on Contact page",
     "Suggestion to mention WhatsApp availability on the listed number. Pros and cons discussed in the document; no decision made — your call."),
    ("Boat ride differentiation (Activities)",
     "Red comment suggests distinguishing the vallam sunset cruise, shikara canal cruise, and houseboat as three separate options. Requires a small rewrite — please advise on preferred wording."),
    ("Yoga/meditation space (Retreat)",
     "Changed from 'thatched pavilion' to 'the jetty' per red comment. Please confirm this is the space intended for yoga/meditation."),
]

flag_rows = []
for i, (title, detail) in enumerate(flags, 1):
    flag_rows.append([
        Paragraph(f"<b>{i}</b>", S("fn", fontName="Helvetica-Bold", fontSize=8,
                                    textColor=GOLD, alignment=TA_CENTER)),
        Paragraph(f"<b>{title}</b>", S("ft", fontName="Helvetica-Bold", fontSize=8,
                                        textColor=FOREST)),
        Paragraph(detail, S("fd", fontName="Helvetica", fontSize=8,
                              leading=11, textColor=TEXT)),
    ])

flag_t = Table(flag_rows, colWidths=[0.7*cm, 4.5*cm, 11.0*cm])
flag_t.setStyle(TableStyle([
    ("ROWBACKGROUNDS", (0,0), (-1,-1), [IVORY, GOLD_LIGHT]),
    ("GRID",         (0,0), (-1,-1), 0.3, colors.HexColor("#D4C9B0")),
    ("BOX",          (0,0), (-1,-1), 0.8, GOLD),
    ("VALIGN",       (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",   (0,0), (-1,-1), 6),
    ("BOTTOMPADDING",(0,0), (-1,-1), 6),
    ("LEFTPADDING",  (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 6),
]))
story.append(flag_t)
story.append(Spacer(1, 0.5*cm))
story.append(forest_rule())
story.append(Paragraph(
    "All changes applied to <i>philipkuttys-farm/src/data/content.js</i>",
    footer_style
))

doc.build(story)
print(f"PDF written to {OUTPUT}")
