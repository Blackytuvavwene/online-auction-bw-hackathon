"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sets request locale
 *
 * @param localization
 * @returns {Function}
 */
function localizationMiddleware(localization) {
    const middleware = (req, res, next) => {
        if (localization) {
            const validLocales = [...localization.locales, 'all'];
            const validFallbackLocales = [...localization.locales, 'null'];
            let requestedLocale = req.query.locale || localization.defaultLocale;
            let requestedFallbackLocale = req.query['fallback-locale'] || localization.defaultLocale;
            if (req.body) {
                if (req.body.locale)
                    requestedLocale = req.body.locale;
                if (req.body['fallback-locale'])
                    requestedFallbackLocale = req.body['fallback-locale'];
            }
            if (requestedFallbackLocale === 'none')
                requestedFallbackLocale = 'null';
            if (requestedLocale === '*' || requestedLocale === 'all')
                requestedLocale = 'all';
            if (validLocales.find((locale) => locale === requestedLocale)) {
                req.locale = requestedLocale;
            }
            if (validFallbackLocales.find((locale) => locale === requestedFallbackLocale)) {
                req.fallbackLocale = requestedFallbackLocale;
            }
        }
        return next();
    };
    return middleware;
}
exports.default = localizationMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsU0FBd0Isc0JBQXNCLENBQUMsWUFBWTtJQUN6RCxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDcEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUUvRCxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ3JFLElBQUksdUJBQXVCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFFekYsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUFFLGVBQWUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO29CQUFFLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN4RjtZQUVELElBQUksdUJBQXVCLEtBQUssTUFBTTtnQkFBRSx1QkFBdUIsR0FBRyxNQUFNLENBQUM7WUFDekUsSUFBSSxlQUFlLEtBQUssR0FBRyxJQUFJLGVBQWUsS0FBSyxLQUFLO2dCQUFFLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFFbEYsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLEVBQUU7Z0JBQzdELEdBQUcsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyx1QkFBdUIsQ0FBQyxFQUFFO2dCQUM3RSxHQUFHLENBQUMsY0FBYyxHQUFHLHVCQUF1QixDQUFDO2FBQzlDO1NBQ0Y7UUFFRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUE5QkQseUNBOEJDIn0=