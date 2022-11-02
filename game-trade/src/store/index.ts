import { useUser } from './user';
import { useLeagueofLegend } from './LeagueofLegend';
import { useGenshinImpact } from './GenshinImpact';
import { useGloryOfTheKing } from './GloryOfTheKing';
import { useDetail } from './detail';
export default function useStore() {
	return {
		user: useUser(),
		LeagueofLegend: useLeagueofLegend(),
		GenshinImpact: useGenshinImpact(),
		detail: useDetail(),
		GloryOfTheKing: useGloryOfTheKing()
	};
}
