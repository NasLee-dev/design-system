import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideosPopularList.mock";

export const handlers: HttpHandler[] = [getMockVideosPopularList];
