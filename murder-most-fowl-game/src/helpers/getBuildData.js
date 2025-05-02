import axios from 'axios';

const OWNER = 'MurderMostFowlDevOps';
const REPO = 'MurderMostFowl';
const GITHUB_API_URL = `https://api.github.com/repos/${OWNER}/${REPO}/actions/runs`;

const VERCEL_API_URL = import.meta.env.VITE_VERCEL_URL
const VERCEL_TOKEN = import.meta.env.VITE_VERCEL_TOKEN;

if (!VERCEL_TOKEN) {
    console.error('VERCEL_TOKEN environment variable is not set');
}

export async function getVercelBuildData() {
    try {
        const headers = {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
        };

        const res = await axios.get(VERCEL_API_URL, {
            headers,
            params: {
                limit: 50,
                project: 'MurderMostFowl'
            }
        });

        const cutoffDate = new Date('2025-01-01');

        const builds = res.data.deployments
            .filter(deploy => new Date(deploy.createdAt) >= cutoffDate)
            .map(deploy => {
                const created = new Date(deploy.createdAt);
                const ready = deploy.ready ? new Date(deploy.ready) : null;
                const buildTimeSeconds = ready ? Math.round((ready - created) / 1000) : null;

                return {
                    date: formatDate(created),
                    platform: 'Vercel',
                    status: deploy.state === 'READY' ? 'Success' : capitalize(deploy.state),
                    buildTime: buildTimeSeconds ? `${buildTimeSeconds}s` : 'N/A'
                };
            });

        return builds.filter(build => build.status === 'Success');
    } catch (e) {
        console.error('Error fetching Vercel builds:', e);
        return [];
    }
}

export async function getBuildData() {
    try {
        const headers = {
            'Accept': 'application/vnd.github+json',
        };

        const res = await axios.get(GITHUB_API_URL, { headers });

        const allBuilds = res.data.workflow_runs.map(run => {
            const start = new Date(run.run_started_at);
            const end = new Date(run.updated_at);
            const buildTimeSeconds = Math.round((end - start) / 1000);

            return {
                date: formatDate(start),
                platform: 'GitHub',
                status: capitalize(run.conclusion || run.status),
                buildTime: `${buildTimeSeconds}s`
            };
        });

        // Filter only successful builds
        return allBuilds.filter(build => build.status === 'Success');
        
    } catch (e) {
        console.error('Error fetching build history:', e);
        return [];
    }
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}






