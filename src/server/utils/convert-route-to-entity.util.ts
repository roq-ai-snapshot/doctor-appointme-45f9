const mapping: Record<string, string> = {
  guests: 'guest',
  'healthcare-providers': 'healthcare_provider',
  'insurance-providers': 'insurance_provider',
  'medicine-staffs': 'medicine_staff',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
