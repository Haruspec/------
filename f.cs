public struct complexValue
    {
        public complexValue(float a, float b)
        {
            this.a = a;
            this.b = b;
        }

        public float a;
        public float b;
    }

public static complexValue strToValue(string s)
    {
        int i = 0;
        float first, second;
        for (int k = s.Length-1; k > 0; k--)
            {
                if(s[k] == '+' || s[k] == '-')
                {
                    i = k;
                }
            }
            float.TryParse(s.Substring(0, i), out first);
            float.TryParse(s.Substring(i++, s.Length-i--), out second);

            return new complexValue(first, second);
    }

        public static complexValue Sum(complexValue first, complexValue second) =>
                        new complexValue(first.a + second.a, first.b + second.b);

        public static complexValue Sub(complexValue first, complexValue second) =>
                        new complexValue(first.a - second.a, first.b - second.b);