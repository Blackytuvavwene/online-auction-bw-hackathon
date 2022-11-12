"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mountEndpoints(express, router, endpoints) {
    endpoints.forEach((endpoint) => {
        if (!endpoint.root) {
            router[endpoint.method](endpoint.path, endpoint.handler);
        }
        else {
            express[endpoint.method](endpoint.path, endpoint.handler);
        }
    });
}
exports.default = mountEndpoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91bnRFbmRwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhwcmVzcy9tb3VudEVuZHBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLFNBQVMsY0FBYyxDQUFDLE9BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQXFCO0lBQzdFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=