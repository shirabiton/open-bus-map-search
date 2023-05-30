const PLACEHOLDER = 'XXX'

export const TEXTS = {
  timeline_page_title: 'לוח זמנים היסטורי',
  realtime_map_page_title: 'מפה בזמן אמת',
  gaps_page_title: 'נסיעות שלא יצאו',
  choose_datetime: 'תאריך ושעה',
  choose_operator: 'חברה מפעילה',
  operator_placeholder: 'לדוגמא: דן',
  choose_line: 'מספר קו',
  line_placeholder: 'לדוגמא: 17א',
  choose_route: `בחירת מסלול נסיעה (XXX אפשרויות)`,
  choose_stop: `בחירת תחנה (XXX אפשרויות)`,
  direction_arrow: '⟵',
  date_format: 'YYYY-MM-DD',
  time_format: 'HH:mm:ss',
  datetime_format: 'HH:mm:ss · YYYY-MM-DD',
  loading_routes: 'מסלולי נסיעה בטעינה',
  loading_stops: 'תחנות עצירה בטעינה',
  loading_gaps: 'פערי נסיעות בטעינה',
  timestamp_target: 'זמן החיפוש ⌚',
  timestamp_gtfs: 'זמן עצירה מתוכנן 🕛',
  timestamp_siri: 'זמן עצירה בפועל 🚌',
  loading_hits: 'זמני נסיעה בטעינה',
  line_not_found: 'הקו לא נמצא',
  hits_not_found: 'לא נמצאו נסיעות מתוכננות או בפועל',
  planned_time: 'שעה מתוכננת',
  planned_status: 'סטטוס',
  ride_as_planned: 'יצאה כמתוכנן ✔️',
  ride_missing: 'נסיעה חסרה ❌',
  ride_extra: 'נסיעה שלא תוכננה 🧐',
  ride_duped: 'נסיעה כפולה ❇️',
  checkbox_only_gaps: 'רק פערים',
  dashboard_page_title: 'מפעילי תח"צ לפי קיום נסיעות מתוכננות',
  dashboard_page_negative_title: 'מפעילי תח"צ לפי אחוזי אי יציאה מסך הנסיעות  ',
  rides_planned: 'נסיעות שתוכננו',
  rides_actual: 'נסיעות שיצאו',
  dashboard_page_graph_title: 'אחוזי יציאה מסך הנסיעות לפי זמן',
}

export const formatted = (text: string, value: string) => text.replace(PLACEHOLDER, value)
