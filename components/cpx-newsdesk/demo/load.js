import { ReporterEvent } from '/cpx-reporter/reporter.js';

document.dispatchEvent(new ReporterEvent('Onsite Search Performed',{
        keyword: {
            searchType: '',
            searchTerm: '',
            searchMethod: ''
        }
}));