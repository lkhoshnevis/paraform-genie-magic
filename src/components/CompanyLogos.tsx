
export const CompanyLogos = () => {
  const companies = [
    { name: "DECAGON", logo: "D" },
    { name: "YC PORTFOLIO", logo: "YC" },
    { name: "SERIES A+", logo: "A+" },
    { name: "UNICORN", logo: "🦄" }
  ];

  return (
    <div className="mt-16 text-center">
      <p className="text-sm text-gray-600 mb-6">Trusted by 200+ high-growth startups</p>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-700">
              {company.logo}
            </div>
            <span className="text-xs font-medium text-gray-500">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
